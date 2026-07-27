import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiascape-register');
}

export default function WithScreenshotsTibiascapeRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiascape-register" />;
}
