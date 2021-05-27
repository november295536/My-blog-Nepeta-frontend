import 'highlight.js/styles/night-owl.css'
import hljs from 'highlight.js/lib/core'
import Css from 'highlight.js/lib/languages/css'
import Shell from 'highlight.js/lib/languages/shell'
import Bash from 'highlight.js/lib/languages/bash'
import C from 'highlight.js/lib/languages/c'
import Json from 'highlight.js/lib/languages/json'
import Powershell from 'highlight.js/lib/languages/powershell'
import Java from 'highlight.js/lib/languages/java'
import Python from 'highlight.js/lib/languages/python'
import Cpp from 'highlight.js/lib/languages/cpp'
import Csharp from 'highlight.js/lib/languages/csharp'
import Sql from 'highlight.js/lib/languages/sql'
import Go from 'highlight.js/lib/languages/go'
import Matlab from 'highlight.js/lib/languages/matlab'
import Ruby from 'highlight.js/lib/languages/ruby'
import Rust from 'highlight.js/lib/languages/rust'
import Scala from 'highlight.js/lib/languages/scala'
import Haskell from 'highlight.js/lib/languages/haskell'
import Scheme from 'highlight.js/lib/languages/scheme'
import javascript from 'highlight.js/lib/languages/javascript'
import Typescript from 'highlight.js/lib/languages/typescript'
import Lisp from 'highlight.js/lib/languages/lisp'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('json', Json)
hljs.registerLanguage('css', Css)
hljs.registerLanguage('shell', Shell)
hljs.registerLanguage('bash', Bash)
hljs.registerLanguage('lisp', Lisp)
hljs.registerLanguage('c', C)
hljs.registerLanguage('cpp', Cpp)
hljs.registerLanguage('java', Java)
hljs.registerLanguage('python', Python)
hljs.registerLanguage('csharp', Csharp)
hljs.registerLanguage('sql', Sql)
hljs.registerLanguage('go', Go)
hljs.registerLanguage('matlab', Matlab)
hljs.registerLanguage('ruby', Ruby)
hljs.registerLanguage('rust', Rust)
hljs.registerLanguage('scala', Scala)
hljs.registerLanguage('powershell', Powershell)
hljs.registerLanguage('haskell', Haskell)
hljs.registerLanguage('scheme', Scheme)
hljs.registerLanguage('typescript', Typescript)

export default hljs
