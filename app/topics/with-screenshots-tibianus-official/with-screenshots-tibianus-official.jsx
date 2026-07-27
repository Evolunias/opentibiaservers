import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibianus-official');
}

export default function WithScreenshotsTibianusOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibianus-official" />;
}
