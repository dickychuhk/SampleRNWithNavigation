## Compile guide line

### RN Env install (First time install only!):
Run the following command to install React Native CLI.
```
brew install node
brew install watchman
```
If you have already installed Node on your system, make sure it is Node 8.3 or newer.

```
sudo gem install cocoapods
```
==============================================================
### Run the project

##### Package install:
Run the following command to install node package and link to native.
```
cd SampleRNWithNavigation
yarn
```

### Start iOS 
Pod Install
```
cd ios
pod install
```

Back to root folder and run on iOS device
```
npx react-native run-ios
```

### Start Android 

Back to root directory and run on Android device
```
npx react-native run-android
```
