import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaorigins-official');
}

export default function WithScreenshotsTibiaoriginsOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaorigins-official" />;
}
