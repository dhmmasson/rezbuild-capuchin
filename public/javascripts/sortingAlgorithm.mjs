
/**
 * @file sortingAlgorithm - sort technologies following a set of criteria
 * @author dhmmasson <@dhmmasson>
 */
import * as Models from "./Models/index.mjs" ;
import { EventFirer } from "./EventFirer.mjs" ;
import { definePrivateProperties } from "./utils.mjs" ;

/**
  * Sorter - the sortingAlgorithm wrapper class
  *
  * @class
  * @extends EventFirer
  */
class Sorter extends EventFirer {

  /**
   * constructor - initialize everything
   *
   * @param  {module:Models.Technology[]} [technologies] description
   * @param  {module:Models.Criterion[]} [criteria]   description
   */
  constructor( technologies, criteria ) {
    super() ;

    /** @property {Object} technologies - all the technologies
     * @property {Object} technologies.all Array of all the technologies
     * @property {Object} technologies.sorted Array of all the technologies sorted by latest computed score
     * @property {Object} technologies.map ap of all the technologies to be sorted, call the setter
     * */
    this.technologies = technologies ;

    /** @property {module:Models.Criterion[]} - Array of all criterai*/
    this.criteriaArray = [] ;

    /** @property {Object.<string,module:Models.Criterion>} - When a criterion has been updated in the UI add it to this array remove them when sort is complete */
    this.updatedCriteria = [] ;

    /** @property {Object.<string,module:Models.Criterion>} - Map of all criteria*/
    this.criteria = criteria ;

    definePrivateProperties( this, "_technologies", "_criteria" ) ;
  }


  /**
   * set technologies - initialize the technology map, reset the sorted arrays
   *
   * @param  {module:Models.Technology[]} technologies json serialized technology array
   */
  set technologies ( technologies ) {
    this._technologies =
    { all    : []
    , sorted : []
    , map    : {}
    } ;
    // Recreate object from the json serialization
    for( const serialization of technologies ) {

      /** @type module:Models.Technology */
      const technology = new Models.Technology( serialization ) ;
      this._technologies.all.push( technology ) ;
      this._technologies.map[ technology.name ] = technology ;
    }
  }


  /**
   * get technologies - return the object _technologies
   *
   * @return {type}  description
   */
  get technologies( ) {
    return this._technologies ;
  }

  /**
   * set criteria - initialize the criteria map, reset the values
   *
   * @param  {module:Models.Criterion[]} Criterion description
   */
  set criteria ( criteria ) {
    this.criteriaMap = {} ;
    this.criteriaArray = [] ;
    // Recreate object from the json serialization
    for( const _criterion of criteria ) {
      const criterion = new Models.Criterion( _criterion ) ;
      this.criteriaMap[ criterion.name ] = criterion ;
      this.criteriaArray.push( criterion ) ;
      // watch for update
      criterion.on( Models.Criterion.eventType.updated
        , ( eventName, criterion ) => {
          this.updatedCriteria.push( criterion ) ;
          this.sort() ;
        }, this ) ;
    }
    // Clone the criteria as all should be updated
    this.updatedCriteria = this.criteriaArray.slice() ;
  }


  /**
   * get criteria - description
   *
   * @return {type}  description
   */
  get criteria( ) {
    return this._criteria ;
  }


  /**
   * sort - sort all technologies. UpdateBounds > UpdateDominance > UpdateScore then sort.
   * Clear updatedCriteria.
   * fire event:Sorter.eventType.sorted
   *
   * @return {Sorter}  this
   */
  sort( ) {
    this.updateBounds().updateDominance().updateScore() ;
    // Clone technologies array and sort through score
    this.technologies.sorted = this.technologies.all.slice().sort( ( a, b ) => b.score - a.score ) ;
    this.updatedCriteria = [] ;
    this.fire( Sorter.eventType.sorted ) ;
    return this ;
  }


  /**
   * updateDominance - refresh all dominance
   *
   * @return {Sorter}  this
   */
  updateDominance( ) {
    this.technologies.all.forEach( e => e.updateDominance( this.updatedCriteria, this.technologies.all ) ) ;
    return this ;
  }


  /**
   * updateBounds - refresh technology bounds for the updated criteria
   *
   * @return {Sorter}  this sorter
   */
  updateBounds( ) {
    this.technologies.all.forEach( e => e.updateBounds( this.updatedCriteria ) ) ;
    return this ;
  }


  /**
   * updateScore - refresh the score of all technologies
   *
   * @return {Sorter}  this
   */
  updateScore( ) {
    this.technologies.all.forEach( e => e.updateScore( this.criteriaArray ) ) ;
    return this ;
  }


}

/**
 * Sorter.eventType
 * @enum {string}
 * @readonly
 */
Sorter.eventType =
{ "sorted": "sorted" } ;

export { Sorter } ;
