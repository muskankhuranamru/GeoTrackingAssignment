package com.geotrackingassignment

import android.app.Application
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.shell.MainReactPackage
import com.facebook.soloader.SoLoader

// Import BatteryOptimizationModule
import com.geotrackingassignment.BatteryOptimizationModule

class MainApplication : Application(), ReactApplication {

    // Ensure the access level matches the ReactApplication interface
    override val reactNativeHost: ReactNativeHost by lazy {
        object : ReactNativeHost(this@MainApplication) {
            override fun getUseDeveloperSupport(): Boolean {
                return BuildConfig.DEBUG
            }

            override fun getPackages(): List<ReactPackage> {
                val packages = mutableListOf<ReactPackage>()
                packages.add(MainReactPackage())
                packages.add(BatteryOptimizationModule()) // Add BatteryOptimizationModule package
                return packages
            }

            override fun getJSMainModuleName(): String {
                return "index"
            }
        }
    }

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this, /* native exopackage */ false)
    }
}
