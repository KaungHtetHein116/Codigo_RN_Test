
#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(CustomFunction, NSObject)
RCT_EXTERN_METHOD(ShowMessage:(NSString *)message)
@end

//#import "React/RCTBridgeModule.h"

//@interface RCT_EXTERN_REMAP_MODULE(RNCounter, Counter, NSObject)
//@end
