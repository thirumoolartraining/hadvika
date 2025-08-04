// Test dynamic import
export function greeting() {
  return 'This is a dynamically loaded module!';
}

export default {
  greeting: () => 'Default greeting from dynamic module!'
};
