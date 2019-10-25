


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
	
	
## Manual installation

### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`

2. Go to `node_modules` ➜ `zbs-react and add RN0bsnetwork.xcodeproj`

3. In XCode, in the project navigator, select your project. Add `libRN0bsnetwork.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`

4. Run your project `(Cmd+R)`<

## Android
1. Open up `android/app/src/main/java/[...]/MainActivity.java`

   Add `import com.reactlibrary.RN0bsnetworkPackage;` to the imports at the top of the file

   Add `new RN0bsnetworkPackage()` to the list returned by the `getPackages()` method


2. Append the following lines to `android/settings.gradle:`

```

include ':zbs-react'

project(':zbs-react').projectDir = new File(rootProject.projectDir, '../node_modules/zbs-react/android')

```


3. Insert the following lines inside the dependencies block in `android/app/build.gradle:`

```

compile project(':zbs-react')

```

# Usage
1. Import library

```

import RN0bsnetwork from "zbs-react";

```

2. Generate Token

```

const response = await RN0bsnetwork.generateToken();
var tokenData = JSON.parse(response);
var address = tokenData.address;
var seed = tokenData.seed;

```

3. Make Transaction

```

let transfer = { amount: "10", recipient: "XXXXXX", SEED_DATA: "XXXX XXXX XXXX", NODE_URL: "http://XXXXXX" }

try {
	const  transactionLog  =  await  RN0bsnetwork.makeTransfer(transfer);
	alert("Done! Transfer Completed");
} catch (e) {
	alert("Error! Transfer failed");
}

```

4. Data Transaction

```

let params = { data: [{"key": "XXXXX", "type": "XXXXX","value": "XXXXX"}], SEED_DATA: "XXXX XXXX XXXX", NODE_URL: "http://XXXXXX" }

try {
	const  transactionLog  =  await  RN0bsnetwork.dataTransfer(params);
	alert("Done! Transfer Completed");
} catch (e) {
	alert("Error! Transfer failed");
}

```

5. Generate File Hash

```

try {
  filepath = "#####";
  const fileHash = await RN0bsnetwork.generateDocumentHash(filepath);
} catch (ex) {
  console.log(ex);
}

```
