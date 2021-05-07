import React from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Input, HelperText, Label, Select, Textarea } from '@windmill/react-ui'

function CreateSchedules() {
  return (
    <>
      <PageTitle>New Schedules</PageTitle>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label className="mt-1">
          <span>Package</span>
          <Select className="mt-1">
            <option disabled>select option</option>
            <option>A</option>
            <option>B</option>
          </Select>
        </Label>
        <Label className="mt-1">
          <span>Organization</span>
          <Select className="mt-1">
            <option disabled>select option</option>
            <option>A</option>
            <option>B</option>
          </Select>
        </Label>
        <Label>
          <span>Name</span>
          <Input className="mt-1" />
        </Label>
        <Label>
          <span>Exam date</span>
          <Input className="mt-1" />
        </Label>
        <Label>
          <span>Zoom url</span>
          <Input className="mt-1" />
        </Label>
      </div>
    </>
  )
}

export default CreateSchedules
