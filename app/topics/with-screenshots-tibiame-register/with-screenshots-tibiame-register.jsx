import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiame-register');
}

export default function WithScreenshotsTibiameRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiame-register" />;
}
