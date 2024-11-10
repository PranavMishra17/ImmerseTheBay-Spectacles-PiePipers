    const MotionControllerModule = require('LensStudio:MotionControllerModule');
    //const RemoteService = require('lens-scripting:RemoteService');
    
    @component
    export class phonePOLE extends BaseScriptComponent {
      private transform;
      private controller;
        
      @input remoteServiceModule:RemoteService;
        
        
      onAwake() {
        var options = MotionController.Options.create();
        options.motionType = MotionController.MotionType.SixDoF;
        this.controller = MotionControllerModule.getController(options);
        print('Hello! LOOGGGGG ');
    
        this.transform = this.sceneObject.getTransform();
        this.controller.onTransformEvent.add(this.updateTransform.bind(this));
            
        // Check if remoteServiceModule is properly assigned
        if (!this.remoteServiceModule) {
            print("Error: remoteServiceModule not assigned.");
            return;
        }else{
                print("Success: remoteServiceModule assigned!!");
            }
        
        // Create a new HTTP request
        let httpRequest = RemoteServiceHttpRequest.create();
        httpRequest.url = 'https://catfact.ninja/facts'; // Set the URL for the request
        httpRequest.method = RemoteServiceHttpRequest.HttpRequestMethod.Get; // Set the HTTP method to GET
    
 
      
        
      }
    
      updateTransform(position, rotation) {
        this.transform.setWorldPosition(position);
        this.transform.setWorldRotation(rotation);
        print('Hello! This will print logs only on the device it was called from.');
        //global.textLogger.log('Hello! This will print logs only on the device it was called from');
      }
    }