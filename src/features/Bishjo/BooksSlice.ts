import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface BookState{ 
  books: books[];
}

interface books {

  name: string,
  tag: string,
  seen : string,
  time: string,
  category: string,
  picture: string|null,
  information: string|null,
  rate: string|null,
  id: number,
}

  const initialState: BookState={
    books:[{
      name:"انحراف ناپذیر",
      tag: "کیفیت کاری",
      seen: "۲۰۰۰",
      time: "۳ ساعت ",
      category: "طراحی",
      information: "زندگی در دنیای دیجیتال باعث شده است حواسمان پیاپی پرت شود و به جای پرداختن به کار‌های اصلی به حاشیه کشیده شویم. برای تبدیل شدن به یک انسان انحراف ناپذیر ، باید بدانیم چرا برخی کارها را برخلاف میلمان انجام میدهیم و علت اصلی را که در پس آن‌ها نحفته است ، بیابیم.     ",
      rate: "۵.۰",
      picture: "first.png",
      id: 1001,
    },
    {
      name:" هنر دستیابی به تمرکز",
      tag: "کیفیت کاری",
      seen: "۲۰۰۰",
      time: "۳ ساعت ",
      category: "طراحی",
      information: "بهره‌وری به معنی انجام کار های بیشتر نیست، به معنی انجام کارهای درست است؛ به معنی شروع هر روز با دید باز و پایان‌دادن به آن با احساس رضایت، دستاورد و انرژی اضافه است. این کتاب چگونگی آن را به شما نشان می‌دهد.  ",
      rate: "۵.۰",
      picture: "second.png",
      id: 1002,
    },
    {
      name:" مرجع خلاقیت در گرافیک ",
      tag: "کیفیت کاری",
      seen: "۲۰۰۰",
      time: "۳ ساعت ",
      category: "طراحی",
      information: "   آگاهانه، هنرمندان بصری با استفاده از مفاهیم و تصاویر زندگی روزمره دائماً به اندوختۀ خلاقیت خود می افزایند. هنگامی که هنرمند به دنبال ایده ای برای یک طرح است، ترکیبات و اقتباسات تازه ای ار عناصر موجود در این اندوخته حاصل می شود. این تحقیق برای طراحان گرافیک، تصویر سازان، کارگردانان هنری و هر فرد حرفه ای که در خلق رسانۀ بصری دخیل است، مناسب است. ",
      rate: "۵.۰",
      picture: "third.png",
      id: 1003,
    },
    {
      name:" کلید انیمیشن سه بعدی ",
      tag: " انیمیشن سازی / Maya ",
      seen: "۲۰۰",
      time: "۳ ساعت ",
      category: "طراحی",
      information: "  کتاب کلید انیمیشن سه بعدی (MAYA) به قلم علی حیدری، به شما کمک می‌کند   تا اولین قدم برای ساخت انیمیشن‌های زیبا را بردارید و گام به گام تا ساخت آن پیش بروید. ",
      rate: "۵.۰",
      picture: "fourth.png",
      id: 1004,
    },
    {
      name:" هنر عکاسی ",
      tag: "  عکاسی ",
      seen: "۲۰۰",
      time: "۳ ساعت ",
      category: "طراحی",
      information: "  این کتاب شاید خواناترین، شیواترین و کامل ‌ترین کتاب آموزش عکاسی است که از مبتدی تا پیشرفته می تواند با آن ارتباط برقرار‌ کند و با مثال‌های کاربردی و خلاقانه، عکاسی را به علاقه مندان آموزش می‌ دهد",
      rate: "۵.۰",
      picture: "fifth.png",
      id: 1005,
    },
    
  ]
}

export const BookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    ShowAllBooks: (state, action) => {
     const allBooks=state.books.map((item:any)=>
     {return item.name}
     
     )
    }

  }

})

// Action creators are generated for each case reducer function


export const {ShowAllBooks} = BookSlice.actions

export default BookSlice.reducer