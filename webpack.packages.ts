/**
 * Pass an object with the following properties to the array:
 *
 * packageName   <string>
 * filename      <string>  (optional) (default: `Main.js`) The name of the entry file
 * entryPath     <string>  (optional) (default: `Resources/Private/Fusion`) The entry path, relative to the package
 * publicPath    <string>  (optional) (default: `Resources/Public`) The public path, relative to the package
 * hasSourceMap  <boolean> (optional) (default: `true`) Flag to toggle source map generation
 */

const packages = [{ packageName: 'Neos.NeosIo' }];

export default packages;