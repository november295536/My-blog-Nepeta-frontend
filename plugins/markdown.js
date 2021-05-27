import MarkdownIt from 'markdown-it'
import MarkdownItEmoji from 'markdown-it-emoji'
import MarkdownItSub from 'markdown-it-sub'
import MarkdownItSuperscript from 'markdown-it-sup'
import MarkdownItFootnote from 'markdown-it-footnote'
import MarkdownItDeflist from 'markdown-it-deflist'
import MarkdownItAbbreviation from 'markdown-it-abbr'
import MarkdownItInsert from 'markdown-it-ins'
import MarkdownItMark from 'markdown-it-mark'
import MarkdownItTasklists from 'markdown-it-task-lists'
import MarkdownItLatex from 'markdown-it-latex'
import MarkdownItSourceMap from 'markdown-it-source-map'
import MarkdownItHighlightjs from 'markdown-it-highlightjs'
import CustomHljs from '~/tool/markdown-it-highlight'
// import MarkdownItContainer from 'markdown-it-container'

const option = {
  linkify: true,
}

const md = new MarkdownIt(option)
  .use(MarkdownItEmoji)
  .use(MarkdownItSub)
  .use(MarkdownItSuperscript)
  .use(MarkdownItFootnote)
  .use(MarkdownItDeflist)
  .use(MarkdownItAbbreviation)
  .use(MarkdownItInsert)
  .use(MarkdownItMark)
  .use(MarkdownItTasklists)
  .use(MarkdownItSourceMap)
  .use(MarkdownItLatex)
  .use(MarkdownItHighlightjs, { hljs: CustomHljs })
// .use(MarkdownItContainer)

export default (context, inject) => {
  inject('md', md)
}
