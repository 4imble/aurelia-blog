import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./value-converters/date'),
    PLATFORM.moduleName('./value-converters/format-html'),
    PLATFORM.moduleName('./value-converters/keys')
  ]);
}
