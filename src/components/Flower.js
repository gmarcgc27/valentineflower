import React from 'react';
import { motion } from 'motion/react';
import { useParams } from 'react-router-dom';

function Flower() {
    const { name } = useParams();
  return (
    <div class="container">
         <h1 className="text-2xl font-bold mb-4">Flowers for {name}</h1>
         <p>drag it around.</p>
			<motion.div drag whileHover={{scale: 1.2}} whileDrag={{scale: 1.1 }} dragConstraints={{left: 50, right: 50, top: 50, bottom: 50}} class="bouquet ">
				<div class="rose">
					<div class="flower">
						<div class="petal"></div>
						<div class="petal"></div>
						<div class="petal"></div>
						<div class="petal"></div>
						<div class="petal"></div>
					</div>
					<div class="leaf">
						<div class="stem"></div>
						<div class="leafs"></div>
						<div class="leafs"></div>
					</div>
				</div>
				<div class="rose1">
					<div class="flower">
						<div class="petal"></div>
						<div class="petal"></div>
						<div class="petal"></div>
						<div class="petal"></div>
						<div class="petal"></div>
					</div>
					<div class="leaf">
						<div class="stem1"></div>
						<div class="leafs"></div>
						<div class="leafs"></div>
					</div>
				</div>
				<div class="rose2">
					<div class="flower">
						<div class="petal"></div>
						<div class="petal"></div>
						<div class="petal"></div>
						<div class="petal"></div>
						<div class="petal"></div>
					</div>
					<div class="leaf">
						<div class="stem2"></div>
						<div class="leafs"></div>
						<div class="leafs"></div>
					</div>
				</div>
			</motion.div>
		</div>
  )
}

export default Flower