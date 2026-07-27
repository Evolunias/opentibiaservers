import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaretro-online');
}

export default function WithScreenshotsTibiaretroOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaretro-online" />;
}
