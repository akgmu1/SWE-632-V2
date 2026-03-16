<script setup lang="ts">
import {
  ArchiveBoxIcon,
  BugAntIcon,
  HomeIcon,
  PencilSquareIcon,
  PlusIcon,
  PresentationChartLineIcon,
  TrashIcon,
} from '@heroicons/vue/24/outline'
import { RouterLink, RouterView } from 'vue-router'

const IS_DEV = import.meta.env.DEV
</script>

<template>
  <div class="drawer drawer-open">
    <input id="my-drawer-1" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- The primary content here -->
      <div class="px-4">
        <RouterView />
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-1" aria-label="close sidebar" class="drawer-overlay"></label>
      <div class="bg-base-300 min-h-full">
        <RouterLink to="/">
          <div class="text-2xl font-semibold text-center pt-2">Task Manager</div>
        </RouterLink>
        <ul class="menu w-64 p-4 gap-1">
          <!-- Sidebar content here -->
          <li>
            <RouterLink to="/" active-class="bg-primary text-primary-content">
              <HomeIcon class="size-5" />
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/edit" active-class="bg-primary text-primary-content">
              <PencilSquareIcon class="size-5" />
              Edit
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/categories" active-class="bg-primary text-primary-content">
              <ArchiveBoxIcon class="size-5" />
              Categories
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/stats" active-class="bg-primary text-primary-content">
              <PresentationChartLineIcon class="size-5" />
              Statistics
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/create" active-class="bg-primary text-primary-content">
              <PlusIcon class="size-5" />
              Create
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/delete" active-class="bg-primary text-primary-content">
              <TrashIcon class="size-5" />
              Delete
            </RouterLink>
          </li>
          <li v-if="IS_DEV">
            <RouterLink to="/debug" active-class="bg-primary text-primary-content">
              <BugAntIcon class="size-5" />
              Debug
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
