import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadingIcon from '@mui/icons-material/Downloading';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "framer-motion"
import "./Foreground.css"
export default function Cards({data,key,ref}){
    return(
        <motion.div drag dragConstraints={ref} whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }} className="card" key={key}>
             <div className="desc-icon">
                <ContentCopyIcon/>
                <h4>{data.desc}</h4>
                <div className="data-icon">
                    <h6>{data.data}</h6>
                    {data.close ? <CloseIcon/> :<DownloadingIcon/>}
                </div>
                {data.footer ? (
  <div className="footer-div" style={{ backgroundColor: data.color }}>
    <h6>Docs.</h6>
  </div>
) : null}
             </div>
            </motion.div>
    )
}