## Modules

<dl>
<dt><a href="#module_ExpressUtils">ExpressUtils</a></dt>
<dd><p>Express Utilities</p>
</dd>
<dt><a href="#module_HttpUtils">HttpUtils</a></dt>
<dd><p>Express Utilities</p>
</dd>
<dt><a href="#module_Models">Models</a></dt>
<dd><p>Models.js - Contains all the different Models needed for the sorting algorithm</p>
</dd>
</dl>

<a name="module_ExpressUtils"></a>

## ExpressUtils
Express Utilities

**Author**: dhmmasson  

* [ExpressUtils](#module_ExpressUtils)
    * [.Connector](#module_ExpressUtils.Connector)
        * _instance_
            * [.getCriteria()](#module_ExpressUtils.Connector+getCriteria) ⇒ <code>Promise.&lt;Array.&lt;module:models.Criterion&gt;&gt;</code>
            * [.getTechnologies()](#module_ExpressUtils.Connector+getTechnologies) ⇒ <code>Promise.&lt;Array.&lt;module:models.Technology&gt;&gt;</code>
        * _inner_
            * [~pivotEvaluation(evaluations)](#module_ExpressUtils.Connector..pivotEvaluation) ⇒ <code>Promise.&lt;Array.&lt;module:models.Technology&gt;&gt;</code>
                * [~technology](#module_ExpressUtils.Connector..pivotEvaluation..technology) : <code>Technology</code>
                * [~technologiesMap](#module_ExpressUtils.Connector..pivotEvaluation..technologiesMap) : <code>Object.&lt;String, Technology&gt;</code>
                * [~technologiesArray](#module_ExpressUtils.Connector..pivotEvaluation..technologiesArray) : <code>Array.&lt;Technology&gt;</code>
            * [~cleanCriterion(rows)](#module_ExpressUtils.Connector..cleanCriterion) ⇒ <code>Promise.&lt;Array.&lt;module:models.Criterion&gt;&gt;</code>
                * [~criterias](#module_ExpressUtils.Connector..cleanCriterion..criterias) : <code>Array.&lt;Criterion&gt;</code>
    * [.setLocals(app)](#module_ExpressUtils.setLocals) ⇒ <code>Express~Application</code>
    * [.loadFiles(app, [directory])](#module_ExpressUtils.loadFiles) ⇒ <code>Express~Application</code>

<a name="module_ExpressUtils.Connector"></a>

### ExpressUtils.Connector
**Kind**: static class of [<code>ExpressUtils</code>](#module_ExpressUtils)  

* [.Connector](#module_ExpressUtils.Connector)
    * _instance_
        * [.getCriteria()](#module_ExpressUtils.Connector+getCriteria) ⇒ <code>Promise.&lt;Array.&lt;module:models.Criterion&gt;&gt;</code>
        * [.getTechnologies()](#module_ExpressUtils.Connector+getTechnologies) ⇒ <code>Promise.&lt;Array.&lt;module:models.Technology&gt;&gt;</code>
    * _inner_
        * [~pivotEvaluation(evaluations)](#module_ExpressUtils.Connector..pivotEvaluation) ⇒ <code>Promise.&lt;Array.&lt;module:models.Technology&gt;&gt;</code>
            * [~technology](#module_ExpressUtils.Connector..pivotEvaluation..technology) : <code>Technology</code>
            * [~technologiesMap](#module_ExpressUtils.Connector..pivotEvaluation..technologiesMap) : <code>Object.&lt;String, Technology&gt;</code>
            * [~technologiesArray](#module_ExpressUtils.Connector..pivotEvaluation..technologiesArray) : <code>Array.&lt;Technology&gt;</code>
        * [~cleanCriterion(rows)](#module_ExpressUtils.Connector..cleanCriterion) ⇒ <code>Promise.&lt;Array.&lt;module:models.Criterion&gt;&gt;</code>
            * [~criterias](#module_ExpressUtils.Connector..cleanCriterion..criterias) : <code>Array.&lt;Criterion&gt;</code>

<a name="module_ExpressUtils.Connector+getCriteria"></a>

#### connector.getCriteria() ⇒ <code>Promise.&lt;Array.&lt;module:models.Criterion&gt;&gt;</code>
Connector#getCriterion -  return all the criteria in the database

**Kind**: instance method of [<code>Connector</code>](#module_ExpressUtils.Connector)  
**Returns**: <code>Promise.&lt;Array.&lt;module:models.Criterion&gt;&gt;</code> - Promise to deliver the criteria from the database  
<a name="module_ExpressUtils.Connector+getTechnologies"></a>

#### connector.getTechnologies() ⇒ <code>Promise.&lt;Array.&lt;module:models.Technology&gt;&gt;</code>
Connector:getTechnologies - return all evaluated technologies

**Kind**: instance method of [<code>Connector</code>](#module_ExpressUtils.Connector)  
**Returns**: <code>Promise.&lt;Array.&lt;module:models.Technology&gt;&gt;</code> - Promise to deliver the evaluated technologies from the database  
**Todo**

- [ ] join with technology table to gather the description

<a name="module_ExpressUtils.Connector..pivotEvaluation"></a>

#### Connector~pivotEvaluation(evaluations) ⇒ <code>Promise.&lt;Array.&lt;module:models.Technology&gt;&gt;</code>
Connector~pivotEvaluation - Convert an array of evaluation into an array of evaluated technologies

**Kind**: inner method of [<code>Connector</code>](#module_ExpressUtils.Connector)  
**Returns**: <code>Promise.&lt;Array.&lt;module:models.Technology&gt;&gt;</code> - Promise a array of evaluated technologies  

| Param | Type | Description |
| --- | --- | --- |
| evaluations | <code>Array.&lt;module:models.Evaluation&gt;</code> | array of evaluations |


* [~pivotEvaluation(evaluations)](#module_ExpressUtils.Connector..pivotEvaluation) ⇒ <code>Promise.&lt;Array.&lt;module:models.Technology&gt;&gt;</code>
    * [~technology](#module_ExpressUtils.Connector..pivotEvaluation..technology) : <code>Technology</code>
    * [~technologiesMap](#module_ExpressUtils.Connector..pivotEvaluation..technologiesMap) : <code>Object.&lt;String, Technology&gt;</code>
    * [~technologiesArray](#module_ExpressUtils.Connector..pivotEvaluation..technologiesArray) : <code>Array.&lt;Technology&gt;</code>

<a name="module_ExpressUtils.Connector..pivotEvaluation..technology"></a>

##### pivotEvaluation~technology : <code>Technology</code>
**Kind**: inner property of [<code>pivotEvaluation</code>](#module_ExpressUtils.Connector..pivotEvaluation)  
<a name="module_ExpressUtils.Connector..pivotEvaluation..technologiesMap"></a>

##### pivotEvaluation~technologiesMap : <code>Object.&lt;String, Technology&gt;</code>
**Kind**: inner constant of [<code>pivotEvaluation</code>](#module_ExpressUtils.Connector..pivotEvaluation)  
<a name="module_ExpressUtils.Connector..pivotEvaluation..technologiesArray"></a>

##### pivotEvaluation~technologiesArray : <code>Array.&lt;Technology&gt;</code>
**Kind**: inner constant of [<code>pivotEvaluation</code>](#module_ExpressUtils.Connector..pivotEvaluation)  
<a name="module_ExpressUtils.Connector..cleanCriterion"></a>

#### Connector~cleanCriterion(rows) ⇒ <code>Promise.&lt;Array.&lt;module:models.Criterion&gt;&gt;</code>
cleanCriterion - Clean criteria from the database request ( mainly clean the min and max values to be integer)

**Kind**: inner method of [<code>Connector</code>](#module_ExpressUtils.Connector)  
**Returns**: <code>Promise.&lt;Array.&lt;module:models.Criterion&gt;&gt;</code> - Cleaned Criterion  

| Param | Type | Description |
| --- | --- | --- |
| rows | <code>Array.&lt;module:models.Criterion&gt;</code> | an array where the first element is an array of criteria to clean |

<a name="module_ExpressUtils.Connector..cleanCriterion..criterias"></a>

##### cleanCriterion~criterias : <code>Array.&lt;Criterion&gt;</code>
**Kind**: inner constant of [<code>cleanCriterion</code>](#module_ExpressUtils.Connector..cleanCriterion)  
<a name="module_ExpressUtils.setLocals"></a>

### ExpressUtils.setLocals(app) ⇒ <code>Express~Application</code>
setLocals - set the pug locals

**Kind**: static method of [<code>ExpressUtils</code>](#module_ExpressUtils)  
**Returns**: <code>Express~Application</code> - the Express application configured  

| Param | Type | Description |
| --- | --- | --- |
| app | <code>Express~Application</code> | the Express application to configure |

<a name="module_ExpressUtils.loadFiles"></a>

### ExpressUtils.loadFiles(app, [directory]) ⇒ <code>Express~Application</code>
loadFiles - load the routes from the routes folder, only consider .js files, skip files that start by a _

**Kind**: static method of [<code>ExpressUtils</code>](#module_ExpressUtils)  
**Returns**: <code>Express~Application</code> - the Express application configured  
**Todo:**: Use express-autoroute  

| Param | Type | Description |
| --- | --- | --- |
| app | <code>Express~Application</code> | the Express application to configure |
| [directory] | <code>string</code> | the path to extract the routes from |

<a name="module_HttpUtils"></a>

## HttpUtils
Express Utilities

**Author**: dhmmasson  

* [HttpUtils](#module_HttpUtils)
    * [.errorHandler(port)](#module_HttpUtils.errorHandler) ⇒ <code>module:ExpressUtility.onError</code>
    * [.listeningHandler()](#module_HttpUtils.listeningHandler) ⇒ <code>module:ExpressUtility.onListening</code>
    * [.normalizePort(value)](#module_HttpUtils.normalizePort) ⇒ <code>string</code> \| <code>number</code> \| <code>false</code>
    * [..onError](#module_HttpUtils.onError) : <code>function</code>
    * [..onListening](#module_HttpUtils.onListening) : <code>function</code>

<a name="module_HttpUtils.errorHandler"></a>

### HttpUtils.errorHandler(port) ⇒ <code>module:ExpressUtility.onError</code>
generate an event listener capable of printing the port

**Kind**: static method of [<code>HttpUtils</code>](#module_HttpUtils)  
**Returns**: <code>module:ExpressUtility.onError</code> - Event listener for HTTP server "error" event.  

| Param | Type | Description |
| --- | --- | --- |
| port | <code>string</code> \| <code>number</code> | name of the pipe or port number |

<a name="module_HttpUtils.listeningHandler"></a>

### HttpUtils.listeningHandler() ⇒ <code>module:ExpressUtility.onListening</code>
listeningHandler - return an Event listener for HTTP server "listening" event.

**Kind**: static method of [<code>HttpUtils</code>](#module_HttpUtils)  
**Returns**: <code>module:ExpressUtility.onListening</code> - an onlistening calback that print the port number or pipe name  

| Param | Description |
| --- | --- |
| {@external:Express.Server} | server an express server associated with the listening |

<a name="module_HttpUtils.normalizePort"></a>

### HttpUtils.normalizePort(value) ⇒ <code>string</code> \| <code>number</code> \| <code>false</code>
normalizePort - Normalize a port into a number, string, or false.

**Kind**: static method of [<code>HttpUtils</code>](#module_HttpUtils)  
**Returns**: <code>string</code> \| <code>number</code> \| <code>false</code> - the name of the pipe or the port number or false  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>number</code> | either pipe name or port number |

<a name="module_HttpUtils.onError"></a>

### HttpUtils..onError : <code>function</code>
Express Error Callback

**Kind**: static typedef of [<code>HttpUtils</code>](#module_HttpUtils)  
**Throws**:

- <code>EACCES</code><code>EADDRINUSE</code> 


| Param | Type |
| --- | --- |
| error | <code>external:Express.Error</code> | 

<a name="module_HttpUtils.onListening"></a>

### HttpUtils..onListening : <code>function</code>
listening Callback

**Kind**: static typedef of [<code>HttpUtils</code>](#module_HttpUtils)  
<a name="module_Models"></a>

## Models
Models.js - Contains all the different Models needed for the sorting algorithm

**Author**: dhmmasson  

* [Models](#module_Models)
    * _static_
        * [.Evaluation](#module_Models.Evaluation)
    * _inner_
        * [~Criterion](#module_Models.Criterion) ⇐ <code>EventEmitter</code>
            * [new Criterion(serialization)](#new_module_Models.Criterion_new)
            * _instance_
                * [.weight](#module_Models.Criterion+weight) ⇒ <code>number</code>
                * [.weight](#module_Models.Criterion+weight) ⇒ <code>number</code>
                * [.blurIntensity](#module_Models.Criterion+blurIntensity) ⇒ <code>number</code>
                * [.blurIntensity](#module_Models.Criterion+blurIntensity) ⇒ <code>number</code>
                * [.blur(value)](#module_Models.Criterion+blur) ⇒ <code>Score</code>
            * _static_
                * [.Criterion.eventType](#module_Models.Criterion.Criterion.eventType) : <code>enum</code>
        * [~Technology](#module_Models.Technology)
            * [new Technology(serialization)](#new_module_Models.Technology_new)
            * [.updateBounds(criteria)](#module_Models.Technology+updateBounds) ⇒ [<code>Technology</code>](#module_Models.Technology)
            * [.updateDominance(criteria, technologies)](#module_Models.Technology+updateDominance) ⇒ [<code>Technology</code>](#module_Models.Technology)
            * [.updateScore(criteria)](#module_Models.Technology+updateScore) ⇒ [<code>Technology</code>](#module_Models.Technology)

<a name="module_Models.Evaluation"></a>

### Models.Evaluation
**Kind**: static class of [<code>Models</code>](#module_Models)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| technology | <code>string</code> | Name of the technology |
| criteria | <code>string</code> | name of the criteria |
| value | <code>Score</code> | evaluation for the couple `technology` - `criteria` |

<a name="module_Models.Criterion"></a>

### Models~Criterion ⇐ <code>EventEmitter</code>
**Kind**: inner class of [<code>Models</code>](#module_Models)  
**Extends**: <code>EventEmitter</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Unique name of the criteria, to use to reference the criteria |
| description | <code>string</code> | Full name to be used to be displayed |
| min | <code>Score</code> | Minimum value for the criteria in the database |
| max | <code>Score</code> | Maximum value for the criteria in the database |
| weight | <code>number</code> | weight of the criteria for the score computation |
| blurIntensity | <code>number</code> | [0-1] how much to extend the range [ evaluation - blurIntensity * ( max - min ), evaluation ] |


* [~Criterion](#module_Models.Criterion) ⇐ <code>EventEmitter</code>
    * [new Criterion(serialization)](#new_module_Models.Criterion_new)
    * _instance_
        * [.weight](#module_Models.Criterion+weight) ⇒ <code>number</code>
        * [.weight](#module_Models.Criterion+weight) ⇒ <code>number</code>
        * [.blurIntensity](#module_Models.Criterion+blurIntensity) ⇒ <code>number</code>
        * [.blurIntensity](#module_Models.Criterion+blurIntensity) ⇒ <code>number</code>
        * [.blur(value)](#module_Models.Criterion+blur) ⇒ <code>Score</code>
    * _static_
        * [.Criterion.eventType](#module_Models.Criterion.Criterion.eventType) : <code>enum</code>

<a name="new_module_Models.Criterion_new"></a>

#### new Criterion(serialization)
constructor - create a new criterion from a serialization of it (either from json or from the db)


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| serialization | <code>Object</code> |  |  |
| serialization.name | <code>string</code> |  | name of the criteria |
| [serialization.description] | <code>string</code> | <code>&quot;serialization.name&quot;</code> | description of the criteria, name if absent |
| [serialization.min] | <code>number</code> | <code>0</code> | min value for the criteria, 0 if absent |
| [serialization.max] | <code>number</code> | <code>5</code> | max value for the criteria, 5 if absent |

<a name="module_Models.Criterion+weight"></a>

#### criterion.weight ⇒ <code>number</code>
set - Change the weight of this criteria in the final mix

fire the event event:Criterion.eventType.weightUpdated followed by event event:Criterion.eventType.updated

**Kind**: instance property of [<code>Criterion</code>](#module_Models.Criterion)  
**Returns**: <code>number</code> - return the new weight  

| Param | Type | Description |
| --- | --- | --- |
| newWeight | <code>number</code> | the new weight. 0 indicate that the criteria is not considered in the final mix. There is no normalisation for now. |

<a name="module_Models.Criterion+weight"></a>

#### criterion.weight ⇒ <code>number</code>
get - get the weight associated to this criteria.

**Kind**: instance property of [<code>Criterion</code>](#module_Models.Criterion)  
**Returns**: <code>number</code> - the weight. 0 means that the criteria should not be considered  
<a name="module_Models.Criterion+blurIntensity"></a>

#### criterion.blurIntensity ⇒ <code>number</code>
set - fire the event event:Criterion.eventType.blurIntensityUpdated followed by event event:Criterion.eventType.updated

**Kind**: instance property of [<code>Criterion</code>](#module_Models.Criterion)  
**Returns**: <code>number</code> - return the intensity  

| Param | Type | Description |
| --- | --- | --- |
| intensity | <code>number</code> | a 0-1 value. 0 mean no blurring should be applied ( exact values ) 1 mean all values for this technology are the same. .5 means that A dominate B if B value is smaller than A - .5 * ( range ) |

<a name="module_Models.Criterion+blurIntensity"></a>

#### criterion.blurIntensity ⇒ <code>number</code>
get - return the intensity of the blur

**Kind**: instance property of [<code>Criterion</code>](#module_Models.Criterion)  
**Returns**: <code>number</code> - a value between 0 and 1.  
<a name="module_Models.Criterion+blur"></a>

#### criterion.blur(value) ⇒ <code>Score</code>
blur - take a evaluation and blur it according to the intensity

**Kind**: instance method of [<code>Criterion</code>](#module_Models.Criterion)  
**Returns**: <code>Score</code> - the computed lower bound  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>module:Models.Score</code> | the evaluation to blur |

<a name="module_Models.Criterion.Criterion.eventType"></a>

#### Criterion.Criterion.eventType : <code>enum</code>
Criterion.eventType

**Kind**: static enum of [<code>Criterion</code>](#module_Models.Criterion)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| updated | <code>string</code> | <code>&quot;updated&quot;</code> | called when the criteria is changed |
| blurIntensityUpdated | <code>string</code> | <code>&quot;blurIntensityUpdated&quot;</code> | called when the blurIntensity is changed |
| weightUpdated | <code>string</code> | <code>&quot;weightUpdated&quot;</code> | called when the weightUpdated is changed |

<a name="module_Models.Technology"></a>

### Models~Technology
**Kind**: inner class of [<code>Models</code>](#module_Models)  
**Todo**

- [ ] Change everything to have a it in a one read ( compare this techno to an reduced array of technologies )

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Unique name of the technology, to use to reference the criteria |
| description | <code>string</code> | Full name to be used to be displayed |
| evaluations | <code>Object.&lt;Criterion~name, Evaluation~value&gt;</code> | actual evaluation of the technology for the criteria |
| bounds | <code>Object.&lt;Criterion~name, Evaluation~value&gt;</code> | blurred value for the criteria |
| dominance | <code>Object.&lt;Technology~name, number&gt;</code> | How many technologies are dominated ( value  >  bounds ) |
| score | <code>number</code> | computed score : weighted sum. |


* [~Technology](#module_Models.Technology)
    * [new Technology(serialization)](#new_module_Models.Technology_new)
    * [.updateBounds(criteria)](#module_Models.Technology+updateBounds) ⇒ [<code>Technology</code>](#module_Models.Technology)
    * [.updateDominance(criteria, technologies)](#module_Models.Technology+updateDominance) ⇒ [<code>Technology</code>](#module_Models.Technology)
    * [.updateScore(criteria)](#module_Models.Technology+updateScore) ⇒ [<code>Technology</code>](#module_Models.Technology)

<a name="new_module_Models.Technology_new"></a>

#### new Technology(serialization)
constructor - construct a new Technology object from a serialization (json or the db)


| Param | Type | Description |
| --- | --- | --- |
| serialization | <code>Object</code> |  |
| [serialization.technology] | <code>string</code> | name of the technology or `serialization.name` if not present |
| [serialization.name] | <code>string</code> | name of the technology |
| [serialization.description] | <code>string</code> | description of the technology |
| serialization.evaluations | <code>Object.&lt;string, module:Models.Score&gt;</code> | key are part [Criterion](#module_Models.Criterion) evaluations |

<a name="module_Models.Technology+updateBounds"></a>

#### technology.updateBounds(criteria) ⇒ [<code>Technology</code>](#module_Models.Technology)
updateBounds - update the bounds for the given criteria

**Kind**: instance method of [<code>Technology</code>](#module_Models.Technology)  
**Returns**: [<code>Technology</code>](#module_Models.Technology) - return this  

| Param | Type |
| --- | --- |
| criteria | [<code>Array.&lt;Criterion&gt;</code>](#module_Models.Criterion) | 

<a name="module_Models.Technology+updateDominance"></a>

#### technology.updateDominance(criteria, technologies) ⇒ [<code>Technology</code>](#module_Models.Technology)
updateDominance - compute how many other technology are dominated (i.e this lower bound is greater than their evaluation)

**Kind**: instance method of [<code>Technology</code>](#module_Models.Technology)  
**Returns**: [<code>Technology</code>](#module_Models.Technology) - this  

| Param | Type | Description |
| --- | --- | --- |
| criteria | [<code>Array.&lt;Criterion&gt;</code>](#module_Models.Criterion) | updated criteria ( or all ) |
| technologies | [<code>Array.&lt;Technology&gt;</code>](#module_Models.Technology) | all technologies to compare to |

<a name="module_Models.Technology+updateScore"></a>

#### technology.updateScore(criteria) ⇒ [<code>Technology</code>](#module_Models.Technology)
updateScore - weight sum of the dominance

**Kind**: instance method of [<code>Technology</code>](#module_Models.Technology)  
**Returns**: [<code>Technology</code>](#module_Models.Technology) - this  
**Todo**

- [ ] should normalize dominance to rank


| Param | Type | Description |
| --- | --- | --- |
| criteria | [<code>Array.&lt;Criterion&gt;</code>](#module_Models.Criterion) | Array of all criteria |
