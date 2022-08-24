import React from 'react'
// const pinataSDK = require('@pinata/sdk');
// const pinata = pinataSDK('284b4b36eeaf0ce82012', 'ead64c10875087ebf67f560782de5ceb6aa017ddd0fa006f85002348b1bfff5d');


export default function NFTTokenLIst(props) {
    
    let newTokenData = (item,index)=>{
        let postToken;
    if(item.token_uri.substring(8,12)=='ipfs'){
        var postTokensub = item.token_uri.replace(/^.{28}/g,'http://gateway.moralisipfs.com');
        console.log("Token Sub",postTokensub);
        let postToken1 = postTokensub.substring(0,postTokensub.length-1);
        fetch(postToken1)
            .then(res=> res.json())
            .then(data=>{
        console.log("For Inner image",data.image);
        postToken = data.image;
          document.getElementById('img'+index).src = postToken;
          var new_img = data.image;
          console.log("Get IMAGE",new_img);
          var myArray = new_img.split("/");
          let CID = myArray[4];
          console.log("GET CID DATA",CID);

        //   var data = JSON.stringify({
        //     "hashToPin": CID,
        //     "pinataMetadata": {
        //       "name": "MyCustomName",
        //       "keyvalues": {
        //         "customKey": "customValue",
        //         "customKey2": "customValue2"
        //       }
        //     }
        //   });
          
        //   var config = {
        //     method: 'post',
        //     url: 'https://api.pinata.cloud/pinning/pinByHash',
        //     headers: { 
        //       'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjYzcxZDdlYS03MWU3LTRmNjEtODZmMy1hMDUzYzJmYWVlYTIiLCJlbWFpbCI6ImNoaW50YW5zdXJ5YXdhbnNoaTFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjI4NGI0YjM2ZWVhZjBjZTgyMDEyIiwic2NvcGVkS2V5U2VjcmV0IjoiZWFkNjRjMTA4NzUwODdlYmY2N2Y1NjA3ODJkZTVjZWI2YWEwMTdkZGQwZmEwMDZmODUwMDIzNDhiMWJmZmY1ZCIsImlhdCI6MTY2MDgxMjc4NH0.N1WWJDiUfUA4-5LYIF0NlIwGi99Zz9GS2b54UhrwtqA', 
        //       'Content-Type': 'application/json'
        //     },
        //     data: data
        //   };
          
        //    axios(config).then(res =>{
        //     console.log(res.data);
        //    }).catch(err =>{
        //     console.log(err);
        //    });
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjYzcxZDdlYS03MWU3LTRmNjEtODZmMy1hMDUzYzJmYWVlYTIiLCJlbWFpbCI6ImNoaW50YW5zdXJ5YXdhbnNoaTFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjI4NGI0YjM2ZWVhZjBjZTgyMDEyIiwic2NvcGVkS2V5U2VjcmV0IjoiZWFkNjRjMTA4NzUwODdlYmY2N2Y1NjA3ODJkZTVjZWI2YWEwMTdkZGQwZmEwMDZmODUwMDIzNDhiMWJmZmY1ZCIsImlhdCI6MTY2MDgxMjc4NH0.N1WWJDiUfUA4-5LYIF0NlIwGi99Zz9GS2b54UhrwtqA");
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "hashToPin": CID,
            "pinataMetadata": {
              "name": "MyCustomName",
              "keyvalues": {
                "customKey": "customValue",
                "customKey2": "customValue2"
              }
            }
          });
          
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          
          fetch("https://api.pinata.cloud/pinning/pinByHash", requestOptions)
            .then(response => response.text())
            .then(result => console.log("Fatching results",result))
            .catch(error => console.log('error', error));
        
    })
    return(postToken);
    }
    else{
        postToken = item.token_uri;
        console.log("Else Post Token",postToken);
        
        try {
            document.getElementById('img'+index).src = postToken;
            }
        catch(err) {
            
            }

        return(postToken);
    }
    }

  return (
    <div className="row mt-5  justify-content-center">
        {props.myData && props.myData.map((item,index)=>{
      return(
        <div className="col-xl-4 col-md-6 col-sm-6">
                                        <div className="top-collection-item">
                                            <div className="collection-item-thumb">
                                                <div className="shield-icon">
                                                    <picture><img alt="" src="assets/img/others/shield.png"/></picture>
                                                </div>
                                               
                                                <a href="#"><picture><img id={"img"+index} /></picture></a>
                                                {newTokenData(item,index)}
                                            </div>
                                            <div className="collection-item-content">
                                                <h5 className="title"><a href="#">{item.name}</a> <span className="symbol">{item.symbol}</span></h5>
                                            </div>
                                            <div className="collection-item-bottom">
                                                <ul>
                                                    <li className="avatar"><a href="#" className="thumb"><picture><img src="assets/img/others/top_col_avatar.png" alt=""/></picture></a>By <a href="#" className="name">Jonson</a></li>
                                                    <li className="wishlist"><a href="#">59</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        </div>
                                    )
                                     })}
    </div>
  )
}