import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaorigins-online');
}

export default function WithScreenshotsTibiaoriginsOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaorigins-online" />;
}
