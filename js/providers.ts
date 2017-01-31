export function ProviderConfig(config: any[]) {
  return function (target: any) {
    Reflect.set(target, 'providers', config);
    return target;
  };
};
