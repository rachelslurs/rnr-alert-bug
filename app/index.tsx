import * as React from 'react';
import { View } from 'react-native';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import AlertDialogDemo from '~/components/AlertDialogDemo';
import DialogDemo from '~/components/DialogDemo';
import { Link } from 'expo-router';

export default function Screen() {
  return (
    <View className='flex-1 justify-center items-center gap-5 p-6 bg-secondary/30'>
      <Card className='w-full max-w-sm p-6 rounded-2xl'>
        <CardHeader className='items-center'>
          <View className='p-3' />
          <CardTitle className='pb-2 text-center'>Alert Dialog</CardTitle>
          <View className='flex-row'>
            <CardDescription className='text-base font-semibold'>Example of an alert dialog from <Link href="https://rnr-docs.vercel.app/components/alert-dialog/">here</Link>. Works in native, but not web.</CardDescription>
          </View>
        </CardHeader>
        <CardContent>
          <View className='flex-row justify-around gap-3'>
            <View className='items-center'>
              <AlertDialogDemo />
            </View>
          </View>
        </CardContent>
      </Card>
      <Card className='w-full max-w-sm p-6 rounded-2xl'>
        <CardHeader className='items-center'>
          <View className='p-3' />
          <CardTitle className='pb-2 text-center'>Dialog</CardTitle>
          <View className='flex-row'>
            <CardDescription className='text-base font-semibold'>Example of a dialog from <Link href="https://rnr-docs.vercel.app/components/dialog/">here</Link>. Works in both native and web.</CardDescription>
          </View>
        </CardHeader>
        <CardContent>
          <View className='flex-row justify-around gap-3'>
            <View className='items-center'>
              <DialogDemo />
            </View>
          </View>
        </CardContent>
      </Card>
    </View>
  );
}
