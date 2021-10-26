////
////  Use this file to import your target's public headers that you would like to expose to Swift.
////
//
import Foundation
import UIKit

@objc(CustomFunction)

class CustomFunction: NSObject, RCTBridgeModule {
  static func moduleName() -> String! {
    return "HelloWorld"
  }
  
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  //  var counter = 2
  var counter = 1
  var label = ""

  @objc
  func ShowMessage(_ message: NSString) {
    
    //    var label = message as String
    
    counter = counter + 1
    
    label = counter % 2 == 0 ? "active" : "inactive"
    
    let alert = UIAlertController(title: "from Swift -> \(label) <-", message: "Hello, this is the passed parameter -> \(message as String) <-", preferredStyle: .alert);
    let seconds: Double = 3;
    alert.view.backgroundColor = .black
    alert.view.alpha = 0.5
    alert.view.layer.cornerRadius = 10
    //    alert.addAction(UIAlertAction(title: "OK", style: UIAlertAction.Style.default, handler: nil))
    
    DispatchQueue.main.async {
      (UIApplication.shared.delegate as? AppDelegate)?.window.rootViewController?.present(alert, animated: true, completion: nil)
    }
    
    DispatchQueue.main.asyncAfter(deadline: DispatchTime.now() + seconds, execute: {
      alert.dismiss(animated: true, completion: nil)
   
    })
    
  }
}

//@objc
// func constantsToExport() -> [AnyHashable : Any]! {
//   return ["initialCount": 0]
// }

//import Foundation
//@objc(Counter)
//class Counter: NSObject {
//  @objc
//  func constantsToExport(_ message: NSString) -> [AnyHashable : Any]! {
//    return ["My Message": message]
//  }

