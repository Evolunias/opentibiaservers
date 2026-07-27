import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaorigins-login');
}

export default function WithScreenshotsTibiaoriginsLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaorigins-login" />;
}
