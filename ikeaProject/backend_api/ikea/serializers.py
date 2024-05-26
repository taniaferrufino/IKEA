from .import models 
from rest_framework import serializers

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vendor
        fields = ('id','location', 'image')
        
    def __init__(self,*args, **kwargs):
        super(VendorSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth =1

class VendorDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vendor
        fields = ('id', 'location', 'image')
        
    def __init__(self,*args, **kwargs):
        super(VendorDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth =1            
        
class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=models.ProductCategory
        fields = ('id','name','detail')  
        
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Product
        fields=('id','category', 'vendor','name','detail','price')  
        
    def __init__(self,*args, **kwargs):
        super(ProductSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth =1
        
        
class ProductDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Product
        fields =('id', 'category', 'vendor', 'name', 'detail', 'price')  
        
        
    def __init__(self,*args, **kwargs):
        super(ProductSerializer, self).__init__(*args, **kwargs)                        
        self.Meta.depth =1

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model= models.Customer
        fields = ('id', 'user', 'mobile')
        
    def __init__(self,*args, **kwargs):
        super(CustomerSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth =1

class  CustomerDetailSerializer(serializers.ModelSerializer):    
        class Meta:
            model= models.Customer
            fields = ('id', 'user', 'mobile')
        
        def __init__(self,*args, **kwargs):
            super(CustomerDetailSerializer, self).__init__(*args, **kwargs)
            self.Meta.depth =1        
        
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model= models.Order
        fields = ('id', 'customer')
        
    def __init__(self,*args, **kwargs):
        super(OrderSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class  OrderDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderItems
        fields = ('id', 'order', 'product')  
        
    def __init__(self,*args, **kwargs):
        super(OrderDetailSerializer, self).__init__(*args, **kwargs)                        
        self.Meta.depth =1    
        
        
        
class ShippingSerializer(serializers.ModelSerializer):
        class Meta:
            model = models.ShippingAddress
            fields=('id', 'customer','city', 'address')
        
        def __init__(self,*args, **kwargs):
            super(ShippingSerializer, self).__init__(*args, **kwargs)
            self.Meta.depth =1    
            
class ShippingDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.ShippingAddress
        fields=('id', 'customer','city','address')
        
    def __init__(self, *args, **kwargs):
        super(ShippingDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth =1 

class PaymentMethodSerializer(serializers.ModelSerializer):
     class Meta:
         model= models.PaymentMethod
         fields=('id', 'customer', 'method', 'details')                  
        

            
            
