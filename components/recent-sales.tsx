import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between">
        <div className="flex items-center ">
          <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
            <AvatarImage
              src="https://api.dicebear.com/8.x/notionists/svg?seed=Aneka"
              alt="آواتار"
            />
            <AvatarFallback>ا.ا</AvatarFallback>
          </Avatar>
          <div className="mr-4 space-y-1 ">
            <p className="text-sm font-medium leading-none">امیر نجفی</p>
            <p className="text-sm text-muted-foreground">
              amir.najafi@email.com
            </p>
          </div>
        </div>
        <div>+۱٬۹۹۹٫۰۰ تومان</div>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center">
          <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
            <AvatarImage
              src="https://api.dicebear.com/8.x/notionists/svg?seed=Sammy"
              alt="آواتار"
            />

            <AvatarFallback>ج.ل</AvatarFallback>
          </Avatar>
          <div className="mr-4 space-y-1">
            <p className="text-sm font-medium leading-none">محمدرضا اکبری</p>
            <p className="text-sm text-muted-foreground">
              mohammadreza.akbari@email.com
            </p>
          </div>
        </div>
        <div className="font-medium">+۳۹٫۰۰ تومان</div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
            <AvatarImage
              src="https://api.dicebear.com/8.x/notionists/svg?seed=Mimi"
              alt="آواتار"
            />
            <AvatarFallback>ای.ن</AvatarFallback>
          </Avatar>
          <div className="mr-4 space-y-1">
            <p className="text-sm font-medium leading-none">فاطمه احمدی</p>
            <p className="text-sm text-muted-foreground">
              fatemeh.ahmadi@email.com
            </p>
          </div>
        </div>
        <div className="font-medium">+۲۹۹٫۰۰ تومان</div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
            <AvatarImage
              src="https://api.dicebear.com/8.x/notionists/svg?seed=Bob"
              alt="آواتار"
            />
            <AvatarFallback>و.ک</AvatarFallback>
          </Avatar>
          <div className="mr-4 space-y-1">
            <p className="text-sm font-medium leading-none">سارا رضایی</p>
            <p className="text-sm text-muted-foreground">
              sara.rezaei@email.com
            </p>
          </div>
        </div>
        <div className="  font-medium">+۹۹٫۰۰ تومان</div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
            <AvatarImage
              src="https://api.dicebear.com/8.x/notionists/svg?seed=Jasper"
              alt="آواتار"
            />
            <AvatarFallback>ص.د</AvatarFallback>
          </Avatar>
          <div className="mr-4 space-y-1">
            <p className="text-sm font-medium leading-none">علی اکبری</p>
            <p className="text-sm text-muted-foreground">
              ali.akbari@email.com
            </p>
          </div>
        </div>
        <div className="  font-medium">+۳۹٫۰۰ تومان</div>
      </div>
    </div>
  );
}
