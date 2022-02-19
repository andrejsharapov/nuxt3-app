<template>
  <div>
    <kinesis-container>
      <kinesis-element :strength="50">
        <slot name="title" />
      </kinesis-element>
      <kinesis-element :strength="100">
        <slot name="subtitle" />
      </kinesis-element>
      <kinesis-element :strength="150">
        <slot name="more" />
      </kinesis-element>
    </kinesis-container>
  </div>
</template>
