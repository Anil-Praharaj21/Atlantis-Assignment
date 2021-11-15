# Atlantis-Assignment

To run this project currectly, follow the following steps-

Plugins to be added(If not added)
1. Node js
2. Watchman
3. Cocoapods
4. Android SDK
5. Gradle
6. Xcode(For mac)

Node js
1. Download package from https://nodejs.org/en/ (LTS version)
2. Install the downloaded package
3. Watchman(For mac)
4. brew install watchman
5. Cocoapods(For mac)
6. sudo gem install cocoapods

Android SDK
a. For mac
1. brew install --cask adoptopenjdk/openjdk/adoptopenjdk8  (make sure it is JDK 8 or newer)
2. Install Android Studio
3. open ~/.bash_profile
4. export ANDROID_HOME=$HOME/Library/Android/sdk
5. export PATH=$PATH:$ANDROID_HOME/emulator
6. export PATH=$PATH:$ANDROID_HOME/tools
7. export PATH=$PATH:$ANDROID_HOME/tools/bin
8. export PATH=$PATH:$ANDROID_HOME/platform-tools
9. source ~/.bash_profile

b. For linux
1. Install Android Studio
2. sudo vi /etc/environment
3. Paste below commands
4. ANDROID_HOME=$HOME/Library/Android/sdk
5. PATH=$PATH:$ANDROID_HOME/emulator
6. PATH=$PATH:$ANDROID_HOME/tools
7. PATH=$PATH:$ANDROID_HOME/tools/bin
8. PATH=$PATH:$ANDROID_HOME/platform-tools

Gradle
a. For Mac
1. brew install gradle 

b. For Linux
1. wget https://services.gradle.org/distributions/gradle-6.8.3-bin.zip -P /tmp
2. sudo unzip -d /opt/gradle /tmp/gradle-*.zip
3. ls /opt/gradle/gradle-6.8.3
4. sudo nano /etc/profile.d/gradle.sh
5. GRADLE_HOME=/opt/gradle/gradle-5.0
6. PATH=${GRADLE_HOME}/bin:${PATH}

Xcode(For mac)
1. Open Apple Store
2. Search for Xcode
3. Install Xcode

Git Clone(In Terminal)
1. git clone https://github.com/Anil-Praharaj21/Atlantis-Assignment-TodoList.git  - For Facebook Like Button Component
2. cd Atlantis-Assignment-Facebook-Like-Button
3. npm install
4. Connect Android device or open Simulator on your device.
5. npx react-native start
6. npx react-native run-android or npx react-native run-ios (On a different terminal after the above command line to start react-native server on your local machine)

