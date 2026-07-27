import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-blazera-ots');
}

export default function WithScreenshotsBlazeraOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-blazera-ots" />;
}
