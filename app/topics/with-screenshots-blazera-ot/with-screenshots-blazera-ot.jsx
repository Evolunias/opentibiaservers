import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-blazera-ot');
}

export default function WithScreenshotsBlazeraOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-blazera-ot" />;
}
