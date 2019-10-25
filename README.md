


# zbs-react



## Getting started



`$ npm install 0bsnetwork/zbs-react --save`



### Mostly automatic installation



`$ react-native link 0bsnetwork/zbs-react`



### Add below code in your app gradle file

```

android {
	defaultConfig {
		multiDexEnabled true
	}
}

```


	IMPORTANT: when using `generateDocumentHash` function it's necessary to pass absolute file path and request permissions (on Android) to read on the external storage, here an example: [React Native Offical Doc] (https://facebook.github.io/react-native/docs/permissionsandroid)