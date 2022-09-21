const express = require('express')
const app = express()
app.use(express.static('images'))
minion = {
    top: 0,
    left: 0,
}

app.get('/:t/:l', function(req, res){
    var t=req.params.t
    var l=req.params.l
    minion.top += t
    minion.left += l
        
   var html= '<html><head><style> tr,td {border: 1px solid black; width: 50px; height: 50px}; </style></head><body><table>'
   for (i = 0; i<=3; i++){
    html+='<tr>'
    for (j = 0; j <=3; j++){
        html += '<td>'
        
        if(i==minion.top && j==minion.left ){
            html+= '<img src="minion.jpg" height="40" width="40">';
        }
    
    html+='</td>'
   }html+='</tr>'
   
}
html+='</table></body></html>'
res.send(html)
})
   
app.listen(3000, function(req, res){
    console.log('runing')
})
