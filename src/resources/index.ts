import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    './value-converters/date',
    './value-converters/format-html',
    './value-converters/keys',
  ]);
}
