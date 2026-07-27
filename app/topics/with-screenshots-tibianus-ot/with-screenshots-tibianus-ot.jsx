import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibianus-ot');
}

export default function WithScreenshotsTibianusOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibianus-ot" />;
}
