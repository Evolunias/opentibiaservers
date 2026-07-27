import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiantis-register');
}

export default function WithScreenshotsTibiantisRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiantis-register" />;
}
