import { Text, View, Image, TextInput } from 'react-native';

import EditScreenInfo from '../../components/edit-screen-info';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

export default function TabOneScreen() {
  return (
    <View className='flex-1 bg-white'>
      <View className='mt-16 mx-5'>
        <View className='flex-row mr-0 items-center'>
          <View className=' h-14 w-14 rounded-full'>
            <Image className='bg-slate-500 h-14 w-14 rounded-full' source={require('../../assets/images/dj1.jpg')}></Image>
          </View>
          <View className='mx-3 bg-slate-200 flex-row items-center rounded-full flex-1' style={{ backgroundColor: '#EEEEEE' }}>
            <Feather className='mx-3' name='search' size={24} color={'gray'} />
            <TextInput className='  rounded-full bg-slate-200 h-14 ' style={{ backgroundColor: '#EEEEEE' }} placeholder='Search' placeholderTextColor={'gray'} clearButtonMode='always'></TextInput>
          </View>
          <Image className='h-10 w-10 ' style={{ tintColor: "#161616" }} source={require('../../assets/images/msg.png')} />
        </View>
      </View>

      <ScrollView>


        <View>
          <View className='flex-row mx-5 mt-7 items-center'>
            <View className=' h-14 w-14 rounded-full'>
              <Image className='bg-slate-500 h-14 w-14 rounded-full' source={require('../../assets/images/dj2.jpg')}></Image>
            </View>
            <View className='mx-3 flex-1'>
              <View className='flex-row items-center'>
                <Text className='text-xl font-semibold' >
                  Alexandra Sia
                </Text>
                <View className='mx-3 border-sky-500 border px-1 rounded-lg'>
                  <Text className='text-sky-500 text-xs'>Follow</Text>
                </View>
              </View>
              <Text className='text-xs font-light' >
                AI Engineer @OpenAI
              </Text>
            </View>
            <Feather name='more-vertical' size={24} />
          </View>
          <View className='mx-5 mt-3'>
            <Image className=' h-60 w-full rounded-2xl ' source={require('../../assets/images/openai.png')} />
            <Text className='text-2xl mt-2 font-semibold'>Introducing Sora!</Text>
            <Text className='text-md mt-1 font-light'>Sora can create videos of up to 60 seconds featuring highly detailed
              scenes, complex camera motion, and multiple characters...<Text className='font-bold'>more</Text></Text>
            <View className='flex-row mt-5 mx-5 items-center justify-items-stretch justify-between '>
              <View className='mx-4 items-center'>
                <Feather name='thumbs-up' size={22} />
                <Text>Like</Text>
              </View>
              <View className='h-10 w-px' style={{ backgroundColor: 'gray' }}></View>
              <View className='mx-4 items-center'>
                <Feather name='message-circle' size={22} />
                <Text>Comment</Text>
              </View>
              <View className='h-10 w-px' style={{ backgroundColor: 'gray' }}></View>
              <View className='mx-4 items-center'>
                <Feather name='repeat' size={22} />
                <Text>Repost</Text>
              </View>
              <View className='h-10 w-px' style={{ backgroundColor: 'gray' }}></View>
              <View className='mx-4 items-center'>
                <Image className='h-6 w-6 ' style={{ tintColor: "#161616" }} source={require('../../assets/images/send.png')} />
                <Text>Send</Text>
              </View>
            </View>
          </View>
        </View>



        <View>
          <View className='flex-row mx-5 mt-7 items-center'>
            <View className=' h-14 w-14 rounded-full'>
              <Image className='bg-slate-500 h-14 w-14 rounded-full' source={require('../../assets/images/linkedIn_Profileb.png')}></Image>
            </View>
            <View className='mx-3 flex-1'>
              <View className='flex-row items-center'>
                <Text className='text-xl font-semibold' >
                  Rahul R
                </Text>
                <View className='mx-3 border-sky-500 border px-1 rounded-lg'>
                  <Text className='text-sky-500 text-xs'>Follow</Text>
                </View>
              </View>
              <Text className='text-xs font-light' >
                Full-Stack Developer | Software Engineer
              </Text>
            </View>
            <Feather name='more-vertical' size={24} />
          </View>
          <View className='mx-5 mt-3'>
            <Image className=' h-60 w-full rounded-2xl ' source={require('../../assets/images/macos.webp')} />
            <Text className='text-2xl mt-2 font-semibold'>macOS Ventura is Awesome!</Text>
            <Text className='text-md mt-1 font-light'>Ventura makes the things you do most on Mac even better, with big updates to the apps you use everyday including Mail...<Text className='font-bold'>more</Text></Text>
            <View className='flex-row mt-5 mx-5 items-center justify-items-stretch justify-between '>
              <View className='mx-4 items-center'>
                <Feather name='thumbs-up' size={22} />
                <Text>Like</Text>
              </View>
              <View className='h-10 w-px' style={{ backgroundColor: 'gray' }}></View>
              <View className='mx-4 items-center'>
                <Feather name='message-circle' size={22} />
                <Text>Comment</Text>
              </View>
              <View className='h-10 w-px' style={{ backgroundColor: 'gray' }}></View>
              <View className='mx-4 items-center'>
                <Feather name='repeat' size={22} />
                <Text>Repost</Text>
              </View>
              <View className='h-10 w-px' style={{ backgroundColor: 'gray' }}></View>
              <View className='mx-4 items-center'>
                <Image className='h-6 w-6 ' style={{ tintColor: "#161616" }} source={require('../../assets/images/send.png')} />
                <Text>Send</Text>
              </View>
            </View>
          </View>
        </View>


        <View>
          <View className='flex-row mx-5 mt-7 items-center'>
            <View className=' h-14 w-14 rounded-full'>
              <Image className='bg-slate-500 h-14 w-14 rounded-full' source={require('../../assets/images/ceo.png')}></Image>
            </View>
            <View className='mx-3 flex-1'>
              <View className='flex-row items-center'>
                <Text className='text-xl font-semibold' >
                  Jensen Huang
                </Text>
                <View className='mx-3 border-sky-500 border px-1 rounded-lg'>
                  <Text className='text-sky-500 text-xs'>Follow</Text>
                </View>
              </View>
              <Text className='text-xs font-light' >
                CEO @Nvidia
              </Text>
            </View>
            <Feather name='more-vertical' size={24} />
          </View>
          <View className='mx-5 mt-3'>
            <Image className=' h-60 w-full rounded-2xl ' source={require('../../assets/images/Nvidia.png')} />
            <Text className='text-2xl mt-2 font-semibold'>Nvidia Keynote</Text>
            <Text className='text-md mt-1 font-light'>Groundbreaking keynote is happening on monday, march 18 at 1p.m. PropTypes.node
                  Register to attend #GTC24 in...<Text className='font-bold'>more</Text></Text>
            <View className='flex-row mt-5 mx-5 items-center justify-items-stretch justify-between '>
              <View className='mx-4 items-center'>
                <Feather name='thumbs-up' size={22} />
                <Text>Like</Text>
              </View>
              <View className='h-10 w-px' style={{ backgroundColor: 'gray' }}></View>
              <View className='mx-4 items-center'>
                <Feather name='message-circle' size={22} />
                <Text>Comment</Text>
              </View>
              <View className='h-10 w-px' style={{ backgroundColor: 'gray' }}></View>
              <View className='mx-4 items-center'>
                <Feather name='repeat' size={22} />
                <Text>Repost</Text>
              </View>
              <View className='h-10 w-px' style={{ backgroundColor: 'gray' }}></View>
              <View className='mx-4 items-center'>
                <Image className='h-6 w-6 ' style={{ tintColor: "#161616" }} source={require('../../assets/images/send.png')} />
                <Text>Send</Text>
              </View>
            </View>
          </View>
        </View>
        <View className='h-10'></View>

      </ScrollView>
    </View>
  );
}

const styles = {
  container: `flex-1`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};
