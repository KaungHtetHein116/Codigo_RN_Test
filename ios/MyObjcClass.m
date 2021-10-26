//
//  MyObjcClass.m
//  MyApp
//
//  Created by Kaung Htet Hein on 10/26/21.
//

#import "MyObjcClass.h"

@implementation MyObjcClass

RCT_EXPORT_MODULE()
- (NSDictionary *)constantsToExport {
  return @{@"gretting": @"Welcome ------------>"};
}
  
  RCT_EXPORT_METHOD(squareMe:(int)number:(RCTResponseSenderBlock)callback) {
    callback(@[[NSNull null], [NSNumber numberWithInt:(number*number)]]);
  }
  
@end
  
