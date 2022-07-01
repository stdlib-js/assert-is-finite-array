/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-new-wrappers */

'use strict';

var Number = require( '@stdlib/number-ctor' );
var isFiniteArray = require( './../lib' );

var bool = isFiniteArray( [ -5.0, 0.0, 2.0, 5.0 ] );
console.log( bool );
// => true

bool = isFiniteArray( [ -4.0, -3.14, 1.0, 3.14 ] );
console.log( bool );
// => true

bool = isFiniteArray( [ -1.0, new Number( -6.0 ), 2.0 ] );
console.log( bool );
// => true

bool = isFiniteArray( [ -1.0, 'abc', 3.0 ] );
console.log( bool );
// => false

bool = isFiniteArray( [ -2.3, 1.0/0.0, 3.0 ] );
console.log( bool );
// => false

bool = isFiniteArray( [] );
console.log( bool );
// => false
