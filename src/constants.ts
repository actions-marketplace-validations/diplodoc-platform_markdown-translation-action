const usage = `\
#### markdown-translation

command starts with mandatory prefix: \`markdown-translation\`,
then follows command name and parameters to that command.

you are allowed to have other text inside comment and still launch commands,
but commands should star with the new line.

tokens inside command string should be separated by spaces.

##### requirements

- command to start from the new line
- have \`markdown-translation\` prefix
- separate tokens inside command string with spaces
- comment author should have appropriate repository permissions
- comment author should have one of the associations that were specified in the CI configuration

##### commands

- extract
- compose

##### extract

command extracts xliff and skeleton from markdown files at **input_folder** path
and stores them at the **output_folder** path.

##### parameters

paths are relative to the repository root

- input_folder(**required**): path with markdown files
- output_folder(**required**): path to store extracted xliff and skeleton files
- sll(optional): source language locale (default: ru-RU)
- rll(optional): target language locale (default: en-US)

##### example

\`markdown-translation extract documentation documentation-xliff\`

##### compose

command composes xliff and skeleton files from **input_folder** into markdown files
and stores them at the **output_folder** path.

##### parameters

paths are relative to the repository root

- input_folder(**required**): path with extracted xliff and skeleton files
- output_folder(**required**): path to store composed markdown

##### example

\`markdown-translation extract documentation-xliff documentation-translated\``;

export {usage};
export default {usage};