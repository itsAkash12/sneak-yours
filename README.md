It is for Project Building during PRD-B23

<!-- Git related stuffs -->
=> Some basic requirements(Mandatory):
       1- Work in daily branches manner, create using your student_code 
          followed the day in which you working. below is the eg for my branches.
            - branch-naming style: fw20_XXXX_day-x
            -for day-2 branch name should be: fw20_1302_day-2
            -for day-3 branch name should be: fw20_1302_day-3
            -for day-4 branch name should be: fw20_1302_day-4
            through all the necessary days
            

        2- How to create branches:
            - $git branch <branch-name> (without angle brackets)
        
        3- How to switch branches:
            -$git switch <branch-name>  (without angle brackets)
        
        4- How to pull:
            -$git pull origin <branch-name>    (without angle brackets)


=> Some helpful Tools during development :<br />
    - Chakra-UI - https://chakra-ui.com/<br />
    - Chakra-Templets - https://chakra-templates.dev/#<br />
    - String Builder - https://codebeautify.org/string-builder<br />


# Work Flow Chart

For Backend ==> 

# Endpoints
`/users`
`/products`
`/cart`
`/admin`
`/seller`
`/cart`
`/reviews`

# Schemas

   `USER Schema`
```

{
    _id:"12345678923456885",
    name:"Akash",
    email:"akash@gmail.com"
    role:[User,Admin,Seller],
    password:"akash"
}
```


  `Product Schema`
```
{   
    "id":0,
    "product_name":"",
    "price":40000,
    "colors":["red","black"],
    "size":[8,9,10],
    "short_desc":"",
    "long_desc":"",
    "image1":["",""],
    "image2":["",""],
    "seller_name":"Akash",
    "seller_des/address":"Akash",
    "strike_price":67600,
    "discount":20%,
    "category":"Sneakers"
    "brand":"Nike",
    "deliverytime":"2days"
} 
```

********************************************* Best of Luck to Me *************************************** 
