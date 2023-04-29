import Link from 'next/link';

import { Sources } from '@/interfaces/api.query';
import ImageWithFallback from '../Image';

const CONFIG = {
  domain: "https://logo.clearbit.com/"
}

function GridSources({ data }: { data: Sources[] }) {

  const render = () => {
    // const items = data.filter(item => item.language === "en");
    const items = data;

    if (items && items.length > 0) {
      const lists = items.map((item, index) => {
        return (
          <div className="aspect-w-1 aspect-h-1" key={`i${index}_${item.url}`}>
            <Link href={item.url} target="_blank">
              <ImageWithFallback
                src={`${CONFIG.domain}${item.url}`}
                alt={item.name}
                className='w-full h-full object-center object-cover rounded-full drop-shadow-md hover:drop-shadow-xl transition'
                width={64}
                height={64}
              />
            </Link>
          </div>
        )
      })

      return lists;
    } else {
      return (
        <>no data</>
      )
    }
  }

  return (
    <div className='w-full'>
      <div className='grid grid-cols-4 gap-x-5 gap-y-5'>
        {
          render()
        }
      </div>
    </div>
  )
}

export default GridSources