import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-blazera-open-tibia');
}

export default function WithScreenshotsBlazeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-blazera-open-tibia" />;
}
