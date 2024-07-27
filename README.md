<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# ifthenAsync

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> If a predicate function returns a truthy value, invoke `x`; otherwise, invoke `y`.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import ifthenAsync from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-async-if-then@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/utils-async-if-then/tags). For example,

```javascript
import ifthenAsync from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-async-if-then@v0.2.2-deno/mod.js';
```

#### ifthenAsync( predicate, x, y, done )

If a `predicate` function returns a truthy value, invokes `x`; otherwise, invokes `y`.

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';

function predicate( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, randu() > 0.5 );
    }
}

function x( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, 1.0 );
    }
}

function y( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, -1.0 );
    }
}

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
}

ifthenAsync( predicate, x, y, done );
```

The `predicate` function is provided a single argument:

-   `clbk`: callback to invoke upon `predicate` function completion

The callback accepts two arguments:

-   `error`: error object
-   `bool`: condition used to determine whether to invoke `x` or `y`

Both `x` and `y` are provided a single argument:

-   `clbk`: callback to invoke upon function completion

The callback function accepts any number of arguments, with the first argument reserved for providing an error. If the error argument is falsy, the `done` callback is invoked with its first argument as `null` and all other provided arguments. If the error argument is truthy, the `done` callback is invoked with only an error argument.

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';

function predicate( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, randu() > 0.5 );
    }
}

function x( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, 1.0, 2.0, 3.0 );
    }
}

function y( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, 4.0, 5.0, 6.0 );
    }
}

function done( error, a, b, c ) {
    if ( error ) {
        throw error;
    }
    console.log( a, b, c );
}

ifthenAsync( predicate, x, y, done );
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function is similar to [`ifelseAsync()`][@stdlib/utils/async/if-else], but allows deferred argument evaluation.
-   Execution is **not** guaranteed to be asynchronous. To guarantee asynchrony, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint-disable callback-return -->

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import ceil from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil@deno/mod.js';
import repeatString from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-repeat@deno/mod.js';
import ifthenAsync from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-async-if-then@deno/mod.js';

var i;

function next() {
    ifthenAsync( predicate, x, y, done );
}

function predicate( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, randu() > 0.9 );
    }
}

function x( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, repeatString( 'BOOP', ceil( randu()*3.0 ) ) );
    }
}

function y( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, repeatString( 'beep', ceil( randu()*5.0 ) ) );
    }
}

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    i += 1;
    console.log( result );
    if ( i < 100 ) {
        return next();
    }
}

i = 0;
next();
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-async/if-else`][@stdlib/utils/async/if-else]</span><span class="delimiter">: </span><span class="description">if a predicate function returns a truthy value, return `x`; otherwise, return `y`.</span>
-   <span class="package-name">[`@stdlib/utils-if-then`][@stdlib/utils/if-then]</span><span class="delimiter">: </span><span class="description">if a condition is truthy, invoke `x`; otherwise, invoke `y`.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-async-if-then.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-async-if-then

[test-image]: https://github.com/stdlib-js/utils-async-if-then/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/utils-async-if-then/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-async-if-then/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-async-if-then?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-async-if-then.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-async-if-then/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-async-if-then/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-async-if-then/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-async-if-then/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-async-if-then/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-async-if-then/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-async-if-then/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-async-if-then/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-async-if-then/main/LICENSE

[@stdlib/utils/async/if-else]: https://github.com/stdlib-js/utils-async-if-else/tree/deno

<!-- <related-links> -->

[@stdlib/utils/if-then]: https://github.com/stdlib-js/utils-if-then/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
