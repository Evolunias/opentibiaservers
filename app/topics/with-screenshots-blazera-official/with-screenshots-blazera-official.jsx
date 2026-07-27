import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-blazera-official');
}

export default function WithScreenshotsBlazeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-blazera-official" />;
}
