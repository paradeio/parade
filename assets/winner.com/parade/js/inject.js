
        (function() {

            getCssFiles();
            getJQueryFile();

            function getJQueryFile() {

                console.log( "jQuery ready!" );

                if(typeof jQuery=='undefined') {

                    var jqTag = document.createElement('script');
                    jqTag.type = 'text/javascript';

                    jqTag.src = 'https://code.jquery.com/jquery-2.1.1.min.js';
                    jqTag.onload = init;
                    document.getElementsByTagName( 'head' )[0].appendChild( jqTag );

                    // if userAgent is mobile
                    // if ((navigator.userAgent.match(/(?:Android)/i) != null) || (navigator.userAgent.match(/(?:iPhone|iPad|iPod)/i) != null)) {
                    // // if(true) {
                    //     var jqmTag = document.createElement('script');
                    //     jqmTag.type = 'text/javascript';

                    //     jqmTag.src = 'http://code.jquery.com/mobile/1.4.4/jquery.mobile-1.4.4.min.js'
                    //     // jqTag.onload = init;
                    //     document.getElementsByTagName( 'head' )[0].appendChild( jqmTag );
                    // }
                } else {
                    init();
                }
            }


            function getCssFiles() {

                var cssCollection = [
                        '/parade/css/main.css'
                    ];

                for (var i = 0, l = cssCollection.length; i < l; i++) {

                    var cssTag = document.createElement('link');
                    cssTag.rel   = 'stylesheet';
                    cssTag.type = 'text/css';
                    cssTag.href = cssCollection[i];
                    document.getElementsByTagName( 'head' )[0].appendChild( cssTag );
                }
            }

            function getJsFiles() {

                console.log( "js ready!" );

                // run this command: python -m SimpleHTTPServer from: ~/App/.../parade file
                var jsCollection = [
                        '/parade/js/ouibounce.js',
                        '/parade/js/exit-intent.js',
                        '/parade/js/capture.js',
                        '/parade/js/footer.js'
                    ];

                for (var i = 0, l = jsCollection.length; i < l; i++) {

                    var jsTag = document.createElement('script');
                    jsTag.src = jsCollection[i];
                    document.getElementsByTagName( 'head' )[0].appendChild( jsTag );
                }
            }

            function init() {
                getJsFiles();
                $( document ).ready(function() {

                });
            }
        })();
