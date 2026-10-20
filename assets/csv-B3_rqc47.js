function e(e){let t=e==null?``:String(e),n=typeof e==`string`&&(/^[\s\uFEFF]*[=+\-@＝＋－＠]/u.test(t)||/^[\t\r\n]/.test(t)),r=n?`'${t}`:t;return n||/[;"\r\n]/.test(r)?`"${r.replace(/"/g,`""`)}"`:r}function t(t){return`﻿`+t.map(t=>t.map(e).join(`;`)).join(`\r
`)+`\r
`}export{t};