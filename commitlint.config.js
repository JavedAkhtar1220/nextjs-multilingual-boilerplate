/** @type {import('@commitlint/types').UserConfig} */
const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',    
        'fix',      
        'docs',     
        'style',    
        'refactor',
        'perf',     
        'test',    
        'chore'     
      ]
    ],
    'subject-case': [2, 'never', ['sentence-case', 'upper-case', 'camel-case', 'pascal-case']]
  }
}; 

export default config;