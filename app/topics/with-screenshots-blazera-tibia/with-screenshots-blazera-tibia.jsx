import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-blazera-tibia');
}

export default function WithScreenshotsBlazeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-blazera-tibia" />;
}
