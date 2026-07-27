import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaretro-forum');
}

export default function WithScreenshotsTibiaretroForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaretro-forum" />;
}
