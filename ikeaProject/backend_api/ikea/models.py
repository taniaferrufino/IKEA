from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Vendor(models.Model):
    user= models.ForeignKey(User, on_delete= models.CASCADE, default=None)
    location = models.CharField(max_length=50)
    email = models.EmailField(default='noreply@example.com')
    image = models.ImageField(null=True)
    
    def __str__(self):
        return self.user.username
    
class ProductCategory(models.Model):
    title =models.CharField(max_length=200)
    detail  =  models.TextField(null = False)
    
    def __str__(self):
        return self.title
    
class Product(models.Model):
       category = models.ForeignKey(ProductCategory, on_delete=models.SET_NULL, null=True)
       vendor  = models.ForeignKey(Vendor, on_delete=models.SET_NULL, null=True)
       name = models.CharField(max_length=20)
       detail = models.TextField(null=False)
       price = models. FloatField()
       
       def __str__(self):
          return self.name
      
class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    mobile = models.PositiveBigIntegerField(unique=True) 
    
    def __str__(self):
            return self.user.username
         

class Order(models.Model):
        customer= models.ForeignKey(Customer, on_delete=models.CASCADE, related_name = 'orders',  default= None)
        order_time= models.DateTimeField(auto_now_add=True)
        
        def __unicode__(self):
            return '%s' %(self.order_time)
        
class OrderItems(models.Model):
    order= models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_items') 
    product =models.ForeignKey(Product, on_delete=models.CASCADE)       
        
    def __str__(self):
        return self.product.name
    
    
class ShippingAddress(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE) 
    city=models.CharField(max_length=20)  
    address= models.CharField(max_length=100)
    
    
    def __str__(self):
        return self.address

class PaymentMethod(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    method = models.CharField(max_length=50)  
    details = models.TextField()  
